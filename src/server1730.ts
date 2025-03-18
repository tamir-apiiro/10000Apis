
const express = require('express')
import {handler1730} from "./handler1730";
const app = express()
app.get('/1730', handler1730)
app.listen(3000, () => {})
        