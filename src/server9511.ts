
const express = require('express')
import {handler9511} from "./handler9511";
const app = express()
app.get('/9511', handler9511)
app.listen(3000, () => {})
        