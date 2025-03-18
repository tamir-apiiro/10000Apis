
const express = require('express')
import {handler7307} from "./handler7307";
const app = express()
app.get('/7307', handler7307)
app.listen(3000, () => {})
        