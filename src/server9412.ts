
const express = require('express')
import {handler9412} from "./handler9412";
const app = express()
app.get('/9412', handler9412)
app.listen(3000, () => {})
        