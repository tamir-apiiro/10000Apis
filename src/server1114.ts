
const express = require('express')
import {handler1114} from "./handler1114";
const app = express()
app.get('/1114', handler1114)
app.listen(3000, () => {})
        