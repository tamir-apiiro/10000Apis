
const express = require('express')
import {handler9893} from "./handler9893";
const app = express()
app.get('/9893', handler9893)
app.listen(3000, () => {})
        