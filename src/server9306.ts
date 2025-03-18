
const express = require('express')
import {handler9306} from "./handler9306";
const app = express()
app.get('/9306', handler9306)
app.listen(3000, () => {})
        