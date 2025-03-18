
const express = require('express')
import {handler9312} from "./handler9312";
const app = express()
app.get('/9312', handler9312)
app.listen(3000, () => {})
        