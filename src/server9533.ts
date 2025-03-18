
const express = require('express')
import {handler9533} from "./handler9533";
const app = express()
app.get('/9533', handler9533)
app.listen(3000, () => {})
        