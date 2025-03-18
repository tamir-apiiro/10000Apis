
const express = require('express')
import {handler9435} from "./handler9435";
const app = express()
app.get('/9435', handler9435)
app.listen(3000, () => {})
        