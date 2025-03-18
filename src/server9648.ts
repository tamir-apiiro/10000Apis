
const express = require('express')
import {handler9648} from "./handler9648";
const app = express()
app.get('/9648', handler9648)
app.listen(3000, () => {})
        