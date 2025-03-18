
const express = require('express')
import {handler9132} from "./handler9132";
const app = express()
app.get('/9132', handler9132)
app.listen(3000, () => {})
        