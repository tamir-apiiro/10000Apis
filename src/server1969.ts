
const express = require('express')
import {handler1969} from "./handler1969";
const app = express()
app.get('/1969', handler1969)
app.listen(3000, () => {})
        