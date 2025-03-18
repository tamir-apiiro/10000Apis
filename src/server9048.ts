
const express = require('express')
import {handler9048} from "./handler9048";
const app = express()
app.get('/9048', handler9048)
app.listen(3000, () => {})
        