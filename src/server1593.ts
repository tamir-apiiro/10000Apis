
const express = require('express')
import {handler1593} from "./handler1593";
const app = express()
app.get('/1593', handler1593)
app.listen(3000, () => {})
        