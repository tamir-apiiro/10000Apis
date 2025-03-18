
const express = require('express')
import {handler1046} from "./handler1046";
const app = express()
app.get('/1046', handler1046)
app.listen(3000, () => {})
        