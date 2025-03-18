
const express = require('express')
import {handler9268} from "./handler9268";
const app = express()
app.get('/9268', handler9268)
app.listen(3000, () => {})
        