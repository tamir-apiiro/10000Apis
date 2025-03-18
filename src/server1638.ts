
const express = require('express')
import {handler1638} from "./handler1638";
const app = express()
app.get('/1638', handler1638)
app.listen(3000, () => {})
        