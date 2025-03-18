
const express = require('express')
import {handler1459} from "./handler1459";
const app = express()
app.get('/1459', handler1459)
app.listen(3000, () => {})
        