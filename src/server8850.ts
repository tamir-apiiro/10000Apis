
const express = require('express')
import {handler8850} from "./handler8850";
const app = express()
app.get('/8850', handler8850)
app.listen(3000, () => {})
        