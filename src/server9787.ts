
const express = require('express')
import {handler9787} from "./handler9787";
const app = express()
app.get('/9787', handler9787)
app.listen(3000, () => {})
        