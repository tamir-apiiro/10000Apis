
const express = require('express')
import {handler1227} from "./handler1227";
const app = express()
app.get('/1227', handler1227)
app.listen(3000, () => {})
        