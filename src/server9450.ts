
const express = require('express')
import {handler9450} from "./handler9450";
const app = express()
app.get('/9450', handler9450)
app.listen(3000, () => {})
        