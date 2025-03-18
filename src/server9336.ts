
const express = require('express')
import {handler9336} from "./handler9336";
const app = express()
app.get('/9336', handler9336)
app.listen(3000, () => {})
        