
const express = require('express')
import {handler9148} from "./handler9148";
const app = express()
app.get('/9148', handler9148)
app.listen(3000, () => {})
        