
const express = require('express')
import {handler1912} from "./handler1912";
const app = express()
app.get('/1912', handler1912)
app.listen(3000, () => {})
        