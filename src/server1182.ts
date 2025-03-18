
const express = require('express')
import {handler1182} from "./handler1182";
const app = express()
app.get('/1182', handler1182)
app.listen(3000, () => {})
        