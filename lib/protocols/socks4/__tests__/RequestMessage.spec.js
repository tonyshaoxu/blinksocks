'use strict';var _RequestMessage=require('../RequestMessage');var _common=require('../../common');describe('RequestMessage#parse',function(){it('should return null if buffer.length < 9',function(){expect(_RequestMessage.RequestMessage.parse([])).toBe(null)});it('should return null if VER is not SOCKS_VERSION_V4',function(){expect(_RequestMessage.RequestMessage.parse([0,0,0,0,0,0,0,0,0])).toBe(null)});it('should return null if CMD is invalid',function(){expect(_RequestMessage.RequestMessage.parse([_common.SOCKS_VERSION_V4,3,0,0,0,0,0,0,0])).toBe(null)});it('should return null if NULL is not 0',function(){expect(_RequestMessage.RequestMessage.parse([_common.SOCKS_VERSION_V4,_common.REQUEST_COMMAND_CONNECT,0,0,0,0,0,0,1])).toBe(null)});it('should return an instance',function(){expect(_RequestMessage.RequestMessage.parse([_common.SOCKS_VERSION_V4,_common.REQUEST_COMMAND_CONNECT,0,0,0,0,0,0,0])).not.toBe(null)})});