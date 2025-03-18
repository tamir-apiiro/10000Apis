
const express = require('express')
import {handler1928} from "./handler1928";
const app = express()
app.get('/1928', handler1928)
app.listen(3000, () => {})
        