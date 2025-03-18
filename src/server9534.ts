
const express = require('express')
import {handler9534} from "./handler9534";
const app = express()
app.get('/9534', handler9534)
app.listen(3000, () => {})
        