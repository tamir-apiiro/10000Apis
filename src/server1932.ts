
const express = require('express')
import {handler1932} from "./handler1932";
const app = express()
app.get('/1932', handler1932)
app.listen(3000, () => {})
        