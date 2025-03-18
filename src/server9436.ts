
const express = require('express')
import {handler9436} from "./handler9436";
const app = express()
app.get('/9436', handler9436)
app.listen(3000, () => {})
        