
const express = require('express')
import {handler9014} from "./handler9014";
const app = express()
app.get('/9014', handler9014)
app.listen(3000, () => {})
        