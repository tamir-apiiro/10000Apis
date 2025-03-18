
const express = require('express')
import {handler9537} from "./handler9537";
const app = express()
app.get('/9537', handler9537)
app.listen(3000, () => {})
        