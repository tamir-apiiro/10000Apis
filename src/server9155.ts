
const express = require('express')
import {handler9155} from "./handler9155";
const app = express()
app.get('/9155', handler9155)
app.listen(3000, () => {})
        