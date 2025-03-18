
const express = require('express')
import {handler1934} from "./handler1934";
const app = express()
app.get('/1934', handler1934)
app.listen(3000, () => {})
        