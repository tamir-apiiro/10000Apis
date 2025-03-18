
const express = require('express')
import {handler9862} from "./handler9862";
const app = express()
app.get('/9862', handler9862)
app.listen(3000, () => {})
        