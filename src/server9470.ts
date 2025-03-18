
const express = require('express')
import {handler9470} from "./handler9470";
const app = express()
app.get('/9470', handler9470)
app.listen(3000, () => {})
        