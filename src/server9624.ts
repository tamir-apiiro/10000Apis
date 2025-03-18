
const express = require('express')
import {handler9624} from "./handler9624";
const app = express()
app.get('/9624', handler9624)
app.listen(3000, () => {})
        