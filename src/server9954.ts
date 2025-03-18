
const express = require('express')
import {handler9954} from "./handler9954";
const app = express()
app.get('/9954', handler9954)
app.listen(3000, () => {})
        