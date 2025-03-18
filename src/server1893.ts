
const express = require('express')
import {handler1893} from "./handler1893";
const app = express()
app.get('/1893', handler1893)
app.listen(3000, () => {})
        