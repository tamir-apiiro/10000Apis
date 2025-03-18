
const express = require('express')
import {handler9379} from "./handler9379";
const app = express()
app.get('/9379', handler9379)
app.listen(3000, () => {})
        