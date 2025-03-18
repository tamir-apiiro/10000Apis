
const express = require('express')
import {handler282} from "./handler282";
const app = express()
app.get('/282', handler282)
app.listen(3000, () => {})
        