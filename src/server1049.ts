
const express = require('express')
import {handler1049} from "./handler1049";
const app = express()
app.get('/1049', handler1049)
app.listen(3000, () => {})
        