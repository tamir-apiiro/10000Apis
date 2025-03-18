
const express = require('express')
import {handler1336} from "./handler1336";
const app = express()
app.get('/1336', handler1336)
app.listen(3000, () => {})
        