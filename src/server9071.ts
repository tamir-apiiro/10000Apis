
const express = require('express')
import {handler9071} from "./handler9071";
const app = express()
app.get('/9071', handler9071)
app.listen(3000, () => {})
        