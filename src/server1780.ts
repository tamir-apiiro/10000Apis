
const express = require('express')
import {handler1780} from "./handler1780";
const app = express()
app.get('/1780', handler1780)
app.listen(3000, () => {})
        