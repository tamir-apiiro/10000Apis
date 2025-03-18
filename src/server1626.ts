
const express = require('express')
import {handler1626} from "./handler1626";
const app = express()
app.get('/1626', handler1626)
app.listen(3000, () => {})
        