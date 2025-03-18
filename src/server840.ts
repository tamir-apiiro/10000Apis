
const express = require('express')
import {handler840} from "./handler840";
const app = express()
app.get('/840', handler840)
app.listen(3000, () => {})
        