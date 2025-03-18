
const express = require('express')
import {handler1289} from "./handler1289";
const app = express()
app.get('/1289', handler1289)
app.listen(3000, () => {})
        