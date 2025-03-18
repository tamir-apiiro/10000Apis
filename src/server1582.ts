
const express = require('express')
import {handler1582} from "./handler1582";
const app = express()
app.get('/1582', handler1582)
app.listen(3000, () => {})
        