
const express = require('express')
import {handler1404} from "./handler1404";
const app = express()
app.get('/1404', handler1404)
app.listen(3000, () => {})
        