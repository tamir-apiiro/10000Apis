
const express = require('express')
import {handler343} from "./handler343";
const app = express()
app.get('/343', handler343)
app.listen(3000, () => {})
        